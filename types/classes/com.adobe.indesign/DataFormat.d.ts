/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DataFormat extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ASCII. Uses ASCII format.
			 * @type {Adobe.Indesign.DataFormat}
			 * @readonly
			 */
			public static readonly ascii: Adobe.Indesign.DataFormat;
			/**
			 * Uses ASCII format.
			 * @type {Adobe.Indesign.DataFormat}
			 * @readonly
			 */
			public static readonly ASCII: Adobe.Indesign.DataFormat;
			/**
			 * Alias for BINARY. Uses binary format.
			 * @type {Adobe.Indesign.DataFormat}
			 * @readonly
			 */
			public static readonly binary: Adobe.Indesign.DataFormat;
			/**
			 * Uses binary format.
			 * @type {Adobe.Indesign.DataFormat}
			 * @readonly
			 */
			public static readonly BINARY: Adobe.Indesign.DataFormat;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}