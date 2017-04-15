/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class LocationOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for AFTER. Places the object after the reference 
			 * object.
			 */
			public static readonly after: Adobe.Incopy.LocationOptions;
			/** Places the object after the reference object. */
			public static readonly AFTER: Adobe.Incopy.LocationOptions;
			/**
			 * Places the object at the beginning of the containing object.
			 */
			public static readonly AT_BEGINNING: Adobe.Incopy.LocationOptions;
			/** Places the object at the end of the containing object. */
			public static readonly AT_END: Adobe.Incopy.LocationOptions;
			/**
			 * Alias for AT_BEGINNING. Places the object at the beginning 
			 * of the containing object.
			 */
			public static readonly atBeginning: Adobe.Incopy.LocationOptions;
			/**
			 * Alias for AT_END. Places the object at the end of the 
			 * containing object.
			 */
			public static readonly atEnd: Adobe.Incopy.LocationOptions;
			/**
			 * Alias for BEFORE. Places the object before the reference 
			 * object.
			 */
			public static readonly before: Adobe.Incopy.LocationOptions;
			/** Places the object before the reference object. */
			public static readonly BEFORE: Adobe.Incopy.LocationOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for UNKNOWN. No location specified. */
			public static readonly unknown: Adobe.Incopy.LocationOptions;
			/** No location specified. */
			public static readonly UNKNOWN: Adobe.Incopy.LocationOptions;
			/** Constructor */
			public constructor();
		}
	}
}