/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class UserInteractionLevels extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Displays alerts but not dialogs. */
			public static readonly INTERACT_WITH_ALERTS: Adobe.Indesign.UserInteractionLevels;
			/** The script displays all dialogs and alerts. */
			public static readonly INTERACT_WITH_ALL: Adobe.Indesign.UserInteractionLevels;
			/**
			 * Alias for INTERACT_WITH_ALERTS. Displays alerts but not 
			 * dialogs.
			 */
			public static readonly interactWithAlerts: Adobe.Indesign.UserInteractionLevels;
			/**
			 * Alias for INTERACT_WITH_ALL. The script displays all dialogs 
			 * and alerts.
			 */
			public static readonly interactWithAll: Adobe.Indesign.UserInteractionLevels;
			/** The script does not display any dialogs or alerts. */
			public static readonly NEVER_INTERACT: Adobe.Indesign.UserInteractionLevels;
			/**
			 * Alias for NEVER_INTERACT. The script does not display any 
			 * dialogs or alerts.
			 */
			public static readonly neverInteract: Adobe.Indesign.UserInteractionLevels;
			/** Constructor */
			public constructor();
		}
	}
}