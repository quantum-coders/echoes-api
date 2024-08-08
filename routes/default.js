import { getRouter } from '@thewebchimp/primate';
const router = getRouter();

import AttachmentService from '../entities/attachments/attachment.service.js';

import multer from 'multer';
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Dynamic route for handling all Solana actions

router.post('/upload', upload.single('file'), async (req, res) => {

	// Get the file from body
	const file = req.file;

	// Call UploadService.createAttachment with file
	const attachment = await AttachmentService.createAttachment(file);

	// Return the attachment
	res.respond({
		data: attachment,
		message: 'Attachment uploaded',
	});
});

export { router };
