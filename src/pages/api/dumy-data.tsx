import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    const data = {
        "products": [
          { "id": "p1", "title": "Product 1", "description": "This is product 1" },
          { "id": "p2", "title": "Product 2", "description": "This is product 2" },
          { "id": "p3", "title": "Product 3", "description": "This is product 3" }
        ]
      }
    return res.status(200).json(data);
}