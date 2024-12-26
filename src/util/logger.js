import log from 'loglevel';

// 기본 로그 레벨 설정
const logLevel = process.env.REACT_APP_LOG_LEVEL || 'info'; // 환경 변수에서 로그 레벨 가져오기
log.setLevel(logLevel);

// 환경별 추가 설정 (선택)
if (process.env.NODE_ENV === 'development') {
    log.info('Development mode: Logging enabled at all levels');
} else {
    log.warn('Production mode: Logging warnings and errors only');
}

export default log;