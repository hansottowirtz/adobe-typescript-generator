/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PPDValues extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Device-independent.
			 * @type {Adobe.Incopy.PPDValues}
			 * @readonly
			 */
			public static readonly DEVICE_INDEPENDENT: Adobe.Incopy.PPDValues;
			/**
			 * Alias for DEVICE_INDEPENDENT. Device-independent.
			 * @type {Adobe.Incopy.PPDValues}
			 * @readonly
			 */
			public static readonly deviceIndependent: Adobe.Incopy.PPDValues;
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