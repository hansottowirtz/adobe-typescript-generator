/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ChangebarLocations extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Change bars are in the left margin.
			 * @type {Adobe.Incopy.ChangebarLocations}
			 * @readonly
			 */
			public static readonly LEFT_ALIGN: Adobe.Incopy.ChangebarLocations;
			/**
			 * Alias for LEFT_ALIGN. Change bars are in the left margin.
			 * @type {Adobe.Incopy.ChangebarLocations}
			 * @readonly
			 */
			public static readonly leftAlign: Adobe.Incopy.ChangebarLocations;
			/**
			 * Change bars are in the right margin.
			 * @type {Adobe.Incopy.ChangebarLocations}
			 * @readonly
			 */
			public static readonly RIGHT_ALIGN: Adobe.Incopy.ChangebarLocations;
			/**
			 * Alias for RIGHT_ALIGN. Change bars are in the right margin.
			 * @type {Adobe.Incopy.ChangebarLocations}
			 * @readonly
			 */
			public static readonly rightAlign: Adobe.Incopy.ChangebarLocations;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}