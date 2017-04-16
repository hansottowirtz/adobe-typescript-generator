/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class IndexFormat extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Places nested topics on the line below and indented from the 
			 * parent topic.
			 * @type {Adobe.Indesign.IndexFormat}
			 * @readonly
			 */
			public static readonly NESTED_FORMAT: Adobe.Indesign.IndexFormat;
			/**
			 * Alias for NESTED_FORMAT. Places nested topics on the line 
			 * below and indented from the parent topic.
			 * @type {Adobe.Indesign.IndexFormat}
			 * @readonly
			 */
			public static readonly nestedFormat: Adobe.Indesign.IndexFormat;
			/**
			 * Places nested topics on the same line as their parent topic, 
			 * separated by the specified separator.
			 * @type {Adobe.Indesign.IndexFormat}
			 * @readonly
			 */
			public static readonly RUNIN_FORMAT: Adobe.Indesign.IndexFormat;
			/**
			 * Alias for RUNIN_FORMAT. Places nested topics on the same 
			 * line as their parent topic, separated by the specified 
			 * separator.
			 * @type {Adobe.Indesign.IndexFormat}
			 * @readonly
			 */
			public static readonly runinFormat: Adobe.Indesign.IndexFormat;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}