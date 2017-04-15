type HostObject = any;
type ILogger = any;
type LogEvent = any;

declare namespace Adobe {
  namespace Flash {
    namespace Filesystem {
      class File {
        constructor(path: string);
      }
    }
    namespace Utils {
      class Proxy {}
    }
  }
  namespace Mx {
    namespace Logging {
      namespace Targets {
        class LineFormattedTarget {}
      }
    }
  }
}
