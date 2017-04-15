/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class StateTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for DOWN. The mouse pointer is clicked on the button's 
			 * area.
			 */
			public static readonly down: Adobe.Incopy.StateTypes;
			/** The mouse pointer is clicked on the button's area. */
			public static readonly DOWN: Adobe.Incopy.StateTypes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for ROLLOVER. The mouse pointer moves into the 
			 * button's area.
			 */
			public static readonly rollover: Adobe.Incopy.StateTypes;
			/** The mouse pointer moves into the button's area. */
			public static readonly ROLLOVER: Adobe.Incopy.StateTypes;
			/**
			 * Alias for UP. The default appearance, used when there is no 
			 * user activity on the button's area.
			 */
			public static readonly up: Adobe.Incopy.StateTypes;
			/**
			 * The default appearance, used when there is no user activity 
			 * on the button's area.
			 */
			public static readonly UP: Adobe.Incopy.StateTypes;
			/** Constructor */
			public constructor();
		}
	}
}