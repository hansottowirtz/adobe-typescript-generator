/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class LocationOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for AFTER. Places the object after the reference 
			 * object.
			 * @type {Adobe.Indesign.LocationOptions}
			 * @readonly
			 */
			public static readonly after: Adobe.Indesign.LocationOptions;
			/**
			 * Places the object after the reference object.
			 * @type {Adobe.Indesign.LocationOptions}
			 * @readonly
			 */
			public static readonly AFTER: Adobe.Indesign.LocationOptions;
			/**
			 * Places the object at the beginning of the containing object.
			 * @type {Adobe.Indesign.LocationOptions}
			 * @readonly
			 */
			public static readonly AT_BEGINNING: Adobe.Indesign.LocationOptions;
			/**
			 * Places the object at the end of the containing object.
			 * @type {Adobe.Indesign.LocationOptions}
			 * @readonly
			 */
			public static readonly AT_END: Adobe.Indesign.LocationOptions;
			/**
			 * Alias for AT_BEGINNING. Places the object at the beginning 
			 * of the containing object.
			 * @type {Adobe.Indesign.LocationOptions}
			 * @readonly
			 */
			public static readonly atBeginning: Adobe.Indesign.LocationOptions;
			/**
			 * Alias for AT_END. Places the object at the end of the 
			 * containing object.
			 * @type {Adobe.Indesign.LocationOptions}
			 * @readonly
			 */
			public static readonly atEnd: Adobe.Indesign.LocationOptions;
			/**
			 * Alias for BEFORE. Places the object before the reference 
			 * object.
			 * @type {Adobe.Indesign.LocationOptions}
			 * @readonly
			 */
			public static readonly before: Adobe.Indesign.LocationOptions;
			/**
			 * Places the object before the reference object.
			 * @type {Adobe.Indesign.LocationOptions}
			 * @readonly
			 */
			public static readonly BEFORE: Adobe.Indesign.LocationOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for UNKNOWN. No location specified.
			 * @type {Adobe.Indesign.LocationOptions}
			 * @readonly
			 */
			public static readonly unknown: Adobe.Indesign.LocationOptions;
			/**
			 * No location specified.
			 * @type {Adobe.Indesign.LocationOptions}
			 * @readonly
			 */
			public static readonly UNKNOWN: Adobe.Indesign.LocationOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}