/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

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
			/** Down off state. */
			public static readonly DOWN_OFF: Adobe.Incopy.StateTypes;
			/** Down on state. */
			public static readonly DOWN_ON: Adobe.Incopy.StateTypes;
			/** Alias for DOWN_OFF. Down off state. */
			public static readonly downOff: Adobe.Incopy.StateTypes;
			/** Alias for DOWN_ON. Down on state. */
			public static readonly downOn: Adobe.Incopy.StateTypes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for ROLLOVER. The mouse pointer moves into the 
			 * button's area.
			 */
			public static readonly rollover: Adobe.Incopy.StateTypes;
			/** The mouse pointer moves into the button's area. */
			public static readonly ROLLOVER: Adobe.Incopy.StateTypes;
			/** Rollover off state. */
			public static readonly ROLLOVER_OFF: Adobe.Incopy.StateTypes;
			/** Rollover on state. */
			public static readonly ROLLOVER_ON: Adobe.Incopy.StateTypes;
			/** Alias for ROLLOVER_OFF. Rollover off state. */
			public static readonly rolloverOff: Adobe.Incopy.StateTypes;
			/** Alias for ROLLOVER_ON. Rollover on state. */
			public static readonly rolloverOn: Adobe.Incopy.StateTypes;
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
			/** Up off state. */
			public static readonly UP_OFF: Adobe.Incopy.StateTypes;
			/** Up on state. */
			public static readonly UP_ON: Adobe.Incopy.StateTypes;
			/** Alias for UP_OFF. Up off state. */
			public static readonly upOff: Adobe.Incopy.StateTypes;
			/** Alias for UP_ON. Up on state. */
			public static readonly upOn: Adobe.Incopy.StateTypes;
			/** Constructor */
			public constructor();
		}
	}
}