/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ColorModel extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for PROCESS. Process color.
			 * @type {Adobe.Incopy.ColorModel}
			 * @readonly
			 */
			public static readonly process: Adobe.Incopy.ColorModel;
			/**
			 * Process color.
			 * @type {Adobe.Incopy.ColorModel}
			 * @readonly
			 */
			public static readonly PROCESS: Adobe.Incopy.ColorModel;
			/**
			 * Alias for REGISTRATION. Registration color.
			 * @type {Adobe.Incopy.ColorModel}
			 * @readonly
			 */
			public static readonly registration: Adobe.Incopy.ColorModel;
			/**
			 * Registration color.
			 * @type {Adobe.Incopy.ColorModel}
			 * @readonly
			 */
			public static readonly REGISTRATION: Adobe.Incopy.ColorModel;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}