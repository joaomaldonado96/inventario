const errorUtils = require("./error.shared")
const {ObjectId} = require('mongodb')
/**
 * Parses a web service request param to a boolean value
 * If it is not a valid value, throws an error.
 *
 * @param {*} res
 * @param {*} e
 */
const getBooleanParam = (paramName, param) => {
  if (!param) {
    return undefined
  }

  if (param === true || param.toLowerCase === 'true' || param === '1') {
    return true
  } else if (param === false || param.toLowerCase === 'false' || param === '0') {
    return false
  } else {
    throw errorUtils.getErrorResponse(400, 'El parámetro ' + paramName + ' debe recibir un valor booleano.')
  }
}

/**
 * Parses a web service request param to a numeric value
 * If it is not a valid value, throws an error.
 *
 * @param {*} res
 * @param {*} e
 */
const getNumberParam = (paramName, param) => {
  if (!param) {
    return undefined
  }

  if (!Number.isNaN(parseInt(param))) {
    return parseInt(param)
  } else {
    throw errorUtils.getErrorResponse(400, 'El parámetro ' + paramName + ' debe recibir un valor numérico.')
  }
}

/**
 * Extracts params with a prefix and
 * returns a generic query
 *
 * @param {*} req
 * @param {*} prefix
 */
const getGenericQuery = (req, prefix) => {
  let query = {
  }
  let found = false
  for(const param in req) {
    if (param.includes(prefix)) {
      found = true
      let property = param.replace(prefix, '')
      const value = convertToType(req[param])
      if (prefix === 'filter_') {
        if (property.indexOf('greater_than_') === 0) {
          property = property.replace('greater_than_', '')
          query[property] = {
            $gte: value
          }
        } else if (property.indexOf('lower_than_') === 0) {
          property = property.replace('lower_than_', '')
          query[property] = {
            $lte: value
          }
        } else {
          query[property] = getMatchValue(value)
        }
      } else {
        query[property] = value
      }
    }
  }
  if (found) return query
  return null
}

/**
 * Extracts params with a prefix and
 * returns a generic query
 *
 * @param {*} req
 * @param {*} prefix
 */
const getCountQuery = (req) => {
  if (req['count']) {
    return req['count']
  }
  return null
}


/**
 * Extracts params with a prefix and
 * returns a generic query
 *
 * @param {*} req
 * @param {*} prefix
 */
const getRegularMatchQuery = (req, prefix) => {
  let query = []
  let found = false
  for(const param in req) {
    if (param.includes(prefix)) {
      found = true
      let property = param.replace(prefix, '')
      const value = String(req[param]);
      query = query.concat([
        {$addFields : { [property] : { $toString : '$'+ property } }},
        {$match : {[property] : RegExp( value , 'i' )}}
      ])
    }
  }
  if (found) return query
  return null
}


/**
 * Creates a pagination query
 *
 * @param {*} req
 */
const getGenericPagination = (req) => {
  let {pageSize, pageNumber} = req
  if (!pageSize || !pageNumber) return null
  pageNumber = Number(pageNumber)
  pageSize = Number(pageSize)
  return [
    { $skip: pageSize * (pageNumber - 1) },
    { $limit: pageSize }
  ]
}
/*
  This is the format in the get request
  lookup_<as>=<from>,<local_field>,<foreign_field>,<unwind>
  match_lookup_<path>=<value>
*/
const getGenericLookupQuery = (req) => {
  const query = []
  for(const param in req) {
    if (param.indexOf('lookup_') === 0) {
      const [from, localField, foreignField, unwind] = String(req[param]).split(',')
      const as = param.replace('lookup_', '')
      query.push({
        $lookup: {
          from,
          localField,
          foreignField,
          as
        }
      })
      if (Number(unwind) === 1) {
        query.push({
          $unwind: `$${as}`
        })
      }
    } else if (param.indexOf('match_lookup_') === 0) {
      let property = param.replace('match_lookup_', '')
      const value = convertToType(req[param])
      const $match = {}
      if (property.indexOf('greater_than_') === 0) {
        property = property.replace('greater_than_', '')
        $match[property] = {
          $gte: value
        }
      } else if (property.indexOf('lower_than_') === 0) {
        property = property.replace('lower_than_', '')
        $match[property] = {
          $lte: value
        }
      } else {
        $match[property] = getMatchValue(value)
      }
      query.push({
        $match
      })
    }
  }
  if (query.length > 0) return query
  return null
}

/**
 * Creates a generic mongo query based on the req
 *
 * @param {*} req
 */
const getGenericProperties = (req) => {
  try {
    let lazyProperties = []

    const $sort = getGenericQuery(req, 'sort_')
    if ($sort) lazyProperties.push({$sort})

    let $match = getGenericQuery(req, 'filter_')
    if ($match) lazyProperties.push({$match})

    const lookup = getGenericLookupQuery(req)
    if(lookup) lazyProperties = lazyProperties.concat(lookup)

    const pagination = getGenericPagination(req)
    if (pagination) lazyProperties = lazyProperties.concat(pagination)

    const $project = getGenericQuery(req, 'project_')
    if ($project) lazyProperties.push({$project})

    const $count = getCountQuery(req)
    if ($count) lazyProperties.push({$count})

    const regularMatch = getRegularMatchQuery(req, 'regular_match_')
    if (regularMatch) lazyProperties = lazyProperties.concat(regularMatch)

    if (lazyProperties.length === 0) return null
    return lazyProperties
  } catch(e) {
    throw errorUtils.getErrorResponse(500, e.message)
  }
}



/**
 * Converts from string to the specific type.
 * It's important for mongo queries
 *
 * @param {*} val
 */
const convertToType = (val) => {
  let value = Number(val)
  if (!isNaN(value)) return value
  value = val === 'true' || val === 'false'
  if(value) return Boolean(value)
  value = new Date(val)
  if (isValidDate(value)) return value
  return val
}

/**
 * Validate if the value is a date or not
 *
 * @param {*} value
 */
const isValidDate = (value) => {
  return value instanceof Date && !isNaN(value);
}

const getMatchValue = ( value) => {
  if (isNaN(value)) {
    if (typeof value === 'string' && (String(value).length === 12 || String(value).length === 24)) {
      return {
        $in: [value, new ObjectId(value)]
      }
    } else {
      return value
    }
  } else {
    // Searchs number as number and string
    return {
      $in: [value, String(value)]
    }
  }
}

module.exports = {
  getBooleanParam,
  getNumberParam,
  getGenericProperties
}