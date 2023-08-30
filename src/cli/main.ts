import { getLogger } from '../shared/func';

const logger = getLogger();

async function main(): Promise<void> {
  logger.info('My new cli :)');
}

main()
  .then()
  .catch(e => logger.error(e, 'An error occured'));
