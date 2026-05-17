import app from './app';

import { env } from './config/env';

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`Gateway running on port ${PORT}`);

  console.log(`Gateway URL: http://localhost:${PORT}`);
});
