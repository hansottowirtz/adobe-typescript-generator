/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FeatherMode extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. Does not use feathering.
			 * @type {Adobe.Indesign.FeatherMode}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.FeatherMode;
			/**
			 * Does not use feathering.
			 * @type {Adobe.Indesign.FeatherMode}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.FeatherMode;
			/**
			 * Alias for STANDARD. Uses standard feathering.
			 * @type {Adobe.Indesign.FeatherMode}
			 * @readonly
			 */
			public static readonly standard: Adobe.Indesign.FeatherMode;
			/**
			 * Uses standard feathering.
			 * @type {Adobe.Indesign.FeatherMode}
			 * @readonly
			 */
			public static readonly STANDARD: Adobe.Indesign.FeatherMode;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}