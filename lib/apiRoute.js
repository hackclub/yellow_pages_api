export default function apiRoute (callback) {
    return async function handler (req, res) {
        try {
            const output = await callback(req.query || {});
            res.status(200).json(output);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error: ' + error.message });
            throw error;
        }
    }
}