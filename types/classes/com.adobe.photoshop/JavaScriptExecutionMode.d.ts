/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class JavaScriptExecutionMode extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly BEFORERUNNING: Adobe.Photoshop.JavaScriptExecutionMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly NEVER: Adobe.Photoshop.JavaScriptExecutionMode;
			public static readonly ONRUNTIMEERROR: Adobe.Photoshop.JavaScriptExecutionMode;
			/** Constructor */
			public constructor();
		}
	}
}