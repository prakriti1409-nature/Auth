import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers.cookie?.includes('token=12345');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  return res.status(200).json({
    user: {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
    },
  });
}
