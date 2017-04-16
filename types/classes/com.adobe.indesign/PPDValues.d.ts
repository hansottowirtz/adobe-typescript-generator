/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PPDValues extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Device-independent.
			 * @type {Adobe.Indesign.PPDValues}
			 * @readonly
			 */
			public static readonly DEVICE_INDEPENDENT: Adobe.Indesign.PPDValues;
			/**
			 * Alias for DEVICE_INDEPENDENT. Device-independent.
			 * @type {Adobe.Indesign.PPDValues}
			 * @readonly
			 */
			public static readonly deviceIndependent: Adobe.Indesign.PPDValues;
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