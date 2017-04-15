/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StateTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for DOWN. The mouse pointer is clicked on the button's 
			 * area.
			 */
			public static readonly down: Adobe.Indesign.StateTypes;
			/** The mouse pointer is clicked on the button's area. */
			public static readonly DOWN: Adobe.Indesign.StateTypes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for ROLLOVER. The mouse pointer moves into the 
			 * button's area.
			 */
			public static readonly rollover: Adobe.Indesign.StateTypes;
			/** The mouse pointer moves into the button's area. */
			public static readonly ROLLOVER: Adobe.Indesign.StateTypes;
			/**
			 * Alias for UP. The default appearance, used when there is no 
			 * user activity on the button's area.
			 */
			public static readonly up: Adobe.Indesign.StateTypes;
			/**
			 * The default appearance, used when there is no user activity 
			 * on the button's area.
			 */
			public static readonly UP: Adobe.Indesign.StateTypes;
			/** Constructor */
			public constructor();
		}
	}
}