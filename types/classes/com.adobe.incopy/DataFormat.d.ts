/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class DataFormat extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ASCII. Uses ASCII format.
			 * @type {Adobe.Incopy.DataFormat}
			 * @readonly
			 */
			public static readonly ascii: Adobe.Incopy.DataFormat;
			/**
			 * Uses ASCII format.
			 * @type {Adobe.Incopy.DataFormat}
			 * @readonly
			 */
			public static readonly ASCII: Adobe.Incopy.DataFormat;
			/**
			 * Alias for BINARY. Uses binary format.
			 * @type {Adobe.Incopy.DataFormat}
			 * @readonly
			 */
			public static readonly binary: Adobe.Incopy.DataFormat;
			/**
			 * Uses binary format.
			 * @type {Adobe.Incopy.DataFormat}
			 * @readonly
			 */
			public static readonly BINARY: Adobe.Incopy.DataFormat;
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