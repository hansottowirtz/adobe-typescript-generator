/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class JavaScriptExecutionMode extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * Show the JavaScript debugger when the first line of the 
			 * JavaScript executes.
			 */
			public static readonly BEFORERUNNING: Adobe.Photoshop.JavaScriptExecutionMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Never show the JavaScript debugger. Treat runtime errors by 
			 * throwing a JavaScript exceptions.
			 */
			public static readonly NEVER: Adobe.Photoshop.JavaScriptExecutionMode;
			/** Show the JavaScript debugger if a runtime error occurs. */
			public static readonly ONRUNTIMEERROR: Adobe.Photoshop.JavaScriptExecutionMode;
			/** Constructor */
			public constructor();
		}
	}
}