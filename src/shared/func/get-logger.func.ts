import { Logger, pino } from 'pino';

const parentLogger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  }
});

export function getLogger(): Logger {
  return parentLogger;
}

export function getChildLogger(module: string): Logger {
  return getLogger().child({ module });
}
