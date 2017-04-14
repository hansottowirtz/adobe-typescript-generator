/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class JavaScriptExecutionMode extends IllustratorEnumBase {
			/**
			 * Show the JavaScript debugger at the first line of the 
			 * JavaScript.
			 */
			public static readonly BeforeRunning: JavaScriptExecutionMode;
			public static readonly enumCache: CSEnumSharedCache;
			/**
			 * Never show the JavaScript debugger. Treat runtime errors by 
			 * throwing a JavaScript exceptions.
			 */
			public static readonly never: JavaScriptExecutionMode;
			/** Show the JavaScript debugger is a runtime error occurs. */
			public static readonly OnRuntimeError: JavaScriptExecutionMode;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}