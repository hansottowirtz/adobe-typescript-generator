/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class UserInteractionLevels extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Displays alerts but not dialogs.
			 * @type {Adobe.Indesign.UserInteractionLevels}
			 * @readonly
			 */
			public static readonly INTERACT_WITH_ALERTS: Adobe.Indesign.UserInteractionLevels;
			/**
			 * The script displays all dialogs and alerts.
			 * @type {Adobe.Indesign.UserInteractionLevels}
			 * @readonly
			 */
			public static readonly INTERACT_WITH_ALL: Adobe.Indesign.UserInteractionLevels;
			/**
			 * Alias for INTERACT_WITH_ALERTS. Displays alerts but not 
			 * dialogs.
			 * @type {Adobe.Indesign.UserInteractionLevels}
			 * @readonly
			 */
			public static readonly interactWithAlerts: Adobe.Indesign.UserInteractionLevels;
			/**
			 * Alias for INTERACT_WITH_ALL. The script displays all dialogs 
			 * and alerts.
			 * @type {Adobe.Indesign.UserInteractionLevels}
			 * @readonly
			 */
			public static readonly interactWithAll: Adobe.Indesign.UserInteractionLevels;
			/**
			 * The script does not display any dialogs or alerts.
			 * @type {Adobe.Indesign.UserInteractionLevels}
			 * @readonly
			 */
			public static readonly NEVER_INTERACT: Adobe.Indesign.UserInteractionLevels;
			/**
			 * Alias for NEVER_INTERACT. The script does not display any 
			 * dialogs or alerts.
			 * @type {Adobe.Indesign.UserInteractionLevels}
			 * @readonly
			 */
			public static readonly neverInteract: Adobe.Indesign.UserInteractionLevels;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}