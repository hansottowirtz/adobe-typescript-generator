/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class LocationOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for AFTER. Places the object after the reference 
			 * object.
			 * @type {Adobe.Incopy.LocationOptions}
			 * @readonly
			 */
			public static readonly after: Adobe.Incopy.LocationOptions;
			/**
			 * Places the object after the reference object.
			 * @type {Adobe.Incopy.LocationOptions}
			 * @readonly
			 */
			public static readonly AFTER: Adobe.Incopy.LocationOptions;
			/**
			 * Places the object at the beginning of the containing object.
			 * @type {Adobe.Incopy.LocationOptions}
			 * @readonly
			 */
			public static readonly AT_BEGINNING: Adobe.Incopy.LocationOptions;
			/**
			 * Places the object at the end of the containing object.
			 * @type {Adobe.Incopy.LocationOptions}
			 * @readonly
			 */
			public static readonly AT_END: Adobe.Incopy.LocationOptions;
			/**
			 * Alias for AT_BEGINNING. Places the object at the beginning 
			 * of the containing object.
			 * @type {Adobe.Incopy.LocationOptions}
			 * @readonly
			 */
			public static readonly atBeginning: Adobe.Incopy.LocationOptions;
			/**
			 * Alias for AT_END. Places the object at the end of the 
			 * containing object.
			 * @type {Adobe.Incopy.LocationOptions}
			 * @readonly
			 */
			public static readonly atEnd: Adobe.Incopy.LocationOptions;
			/**
			 * Alias for BEFORE. Places the object before the reference 
			 * object.
			 * @type {Adobe.Incopy.LocationOptions}
			 * @readonly
			 */
			public static readonly before: Adobe.Incopy.LocationOptions;
			/**
			 * Places the object before the reference object.
			 * @type {Adobe.Incopy.LocationOptions}
			 * @readonly
			 */
			public static readonly BEFORE: Adobe.Incopy.LocationOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for UNKNOWN. No location specified.
			 * @type {Adobe.Incopy.LocationOptions}
			 * @readonly
			 */
			public static readonly unknown: Adobe.Incopy.LocationOptions;
			/**
			 * No location specified.
			 * @type {Adobe.Incopy.LocationOptions}
			 * @readonly
			 */
			public static readonly UNKNOWN: Adobe.Incopy.LocationOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}