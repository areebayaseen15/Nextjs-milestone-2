import { NextApiRequest, NextApiResponse } from 'next';
import oas from 'oas';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Assuming you have an OpenAPI spec available
  const api = await oas.init('path/to/openapi-spec.json');
  const client = await api.generateClient();

  // Fetching user data from an endpoint defined in the OpenAPI spec
  const userData = await client.get('/user');

  res.status(200).json({ userData });
}
