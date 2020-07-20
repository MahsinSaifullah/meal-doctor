const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const config = require('config');
const path = require('path');
const url = require('url');

const s3 = new aws.S3();
const awsID = config.get('awsID');
const awsSecret = config.get('awsSecret');
const awsBucketName = config.get('awsBucketName');
const awsRegion = config.get('awsRegion');

aws.config.update({
	secretAccessKey: awsSecret,
	accessKeyId: awsID,
	region: awsRegion,
});

const checkFileType = (file, cb) => {
	// Allowed ext
	const filetypes = /jpeg|jpg|png|gif/;
	// Check ext
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	// Check mime
	const mimetype = filetypes.test(file.mimetype);
	if (mimetype && extname) {
		return cb(null, true);
	} else {
		cb('Error: Images Only!');
	}
};

const upload = multer({
	storage: multerS3({
		s3: s3,
		bucket: awsBucketName,
		acl: 'public-read',
		fileFilter: function (req, file, cb) {
			checkFileType(file, cb);
		},
		metadata: function (req, file, cb) {
			cb(null, { fieldName: file.fieldname });
		},
		key: function (req, file, cb) {
			cb(
				null,
				path.basename(file.originalname, path.extname(file.originalname)) +
					'-' +
					Date.now() +
					path.extname(file.originalname)
			);
		},
	}),
});

module.exports = upload;
