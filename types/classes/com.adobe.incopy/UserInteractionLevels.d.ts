/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class UserInteractionLevels extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Displays alerts but not dialogs. */
			public static readonly INTERACT_WITH_ALERTS: Adobe.Incopy.UserInteractionLevels;
			/** The script displays all dialogs and alerts. */
			public static readonly INTERACT_WITH_ALL: Adobe.Incopy.UserInteractionLevels;
			/**
			 * Alias for INTERACT_WITH_ALERTS. Displays alerts but not 
			 * dialogs.
			 */
			public static readonly interactWithAlerts: Adobe.Incopy.UserInteractionLevels;
			/**
			 * Alias for INTERACT_WITH_ALL. The script displays all dialogs 
			 * and alerts.
			 */
			public static readonly interactWithAll: Adobe.Incopy.UserInteractionLevels;
			/** The script does not display any dialogs or alerts. */
			public static readonly NEVER_INTERACT: Adobe.Incopy.UserInteractionLevels;
			/**
			 * Alias for NEVER_INTERACT. The script does not display any 
			 * dialogs or alerts.
			 */
			public static readonly neverInteract: Adobe.Incopy.UserInteractionLevels;
			/** Constructor */
			public constructor();
		}
	}
}