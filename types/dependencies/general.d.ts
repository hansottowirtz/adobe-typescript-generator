/** Wrapper for all Adobe ExtendScript objects */
declare namespace Adobe {
  const $: any;

  type HostObject = any;
  type ILogger = any;
  type LogEvent = any;

  namespace Flash {
    namespace Filesystem {
      class File {
        constructor(path: string);
      }
    }
    namespace Utils {
      class Proxy {}
    }
    namespace Events {
      class Event {}
      class EventDispatcher {}
    }
    namespace Net {
      class URLLoader {}
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
