/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class IndexFormat extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Places nested topics on the line below and indented from the 
			 * parent topic.
			 */
			public static readonly NESTED_FORMAT: Adobe.Indesign.IndexFormat;
			/**
			 * Alias for NESTED_FORMAT. Places nested topics on the line 
			 * below and indented from the parent topic.
			 */
			public static readonly nestedFormat: Adobe.Indesign.IndexFormat;
			/**
			 * Places nested topics on the same line as their parent topic, 
			 * separated by the specified separator.
			 */
			public static readonly RUNIN_FORMAT: Adobe.Indesign.IndexFormat;
			/**
			 * Alias for RUNIN_FORMAT. Places nested topics on the same 
			 * line as their parent topic, separated by the specified 
			 * separator.
			 */
			public static readonly runinFormat: Adobe.Indesign.IndexFormat;
			/** Constructor */
			public constructor();
		}
	}
}