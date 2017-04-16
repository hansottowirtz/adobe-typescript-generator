/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

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
			/** Down off state. */
			public static readonly DOWN_OFF: Adobe.Indesign.StateTypes;
			/** Down on state. */
			public static readonly DOWN_ON: Adobe.Indesign.StateTypes;
			/** Alias for DOWN_OFF. Down off state. */
			public static readonly downOff: Adobe.Indesign.StateTypes;
			/** Alias for DOWN_ON. Down on state. */
			public static readonly downOn: Adobe.Indesign.StateTypes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for ROLLOVER. The mouse pointer moves into the 
			 * button's area.
			 */
			public static readonly rollover: Adobe.Indesign.StateTypes;
			/** The mouse pointer moves into the button's area. */
			public static readonly ROLLOVER: Adobe.Indesign.StateTypes;
			/** Rollover off state. */
			public static readonly ROLLOVER_OFF: Adobe.Indesign.StateTypes;
			/** Rollover on state. */
			public static readonly ROLLOVER_ON: Adobe.Indesign.StateTypes;
			/** Alias for ROLLOVER_OFF. Rollover off state. */
			public static readonly rolloverOff: Adobe.Indesign.StateTypes;
			/** Alias for ROLLOVER_ON. Rollover on state. */
			public static readonly rolloverOn: Adobe.Indesign.StateTypes;
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
			/** Up off state. */
			public static readonly UP_OFF: Adobe.Indesign.StateTypes;
			/** Up on state. */
			public static readonly UP_ON: Adobe.Indesign.StateTypes;
			/** Alias for UP_OFF. Up off state. */
			public static readonly upOff: Adobe.Indesign.StateTypes;
			/** Alias for UP_ON. Up on state. */
			public static readonly upOn: Adobe.Indesign.StateTypes;
			/** Constructor */
			public constructor();
		}
	}
}