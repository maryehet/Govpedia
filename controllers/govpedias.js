const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Govpedia = require('../models/Govpedia');
// @desc    Get all Govpedias - implement pagination, count
// @route   GET /api/v1/govpedias
// @access  Public
exports.getGovpedias = asyncHandler(async (req, res, next) => {
  let query;
  // Copy req.query
  const reqQuery = { ...req.query };
  // Fields to exclude
  const removeFields = ['select', 'sort', 'page', 'limit'];
  // Loop over removeFields and delete them before from reqQuery
  removeFields.forEach((params) => delete reqQuery[params]);
  // Create query string
  let queryStr = JSON.stringify(reqQuery);
  // Create operators ($gt, $lte etc)
  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );
  // Finding resource
  query = Govpedia.find(JSON.parse(queryStr));
  // Select Fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields);
  }
  // Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    // query = query.sort('-createdAt');
    query = query.sort({ createdAt: -1 });
  }
  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 25;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await Govpedia.countDocuments();
  query = query.skip(startIndex).limit(limit);
  // Executing query
  const govpedias = await query;
  // Pagination result
  const pagination = {};
  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }
  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }
  res.status(200).json({
    success: true,
    count: govpedias.length,
    pagination,
    data:govpedias,
  });
});
// @desc    Get single Govpedia
// @route   GET /api/v1/govpedias/:id
// @access  Public
exports.getGovpedia = asyncHandler(async (req, res, next) => {
  const govpedia = await Govpedia.findById(req.params.id);
  if (!govpedia) {
    return next(
      next(
        new ErrorResponse(
          `Govpedia not found with id of ${req.params.id}`,
          404
        )
      )
    );
  }
  res.status(200).json({
    success: true,
    data:govpedia,
  });
});