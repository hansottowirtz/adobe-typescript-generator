/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class UserInteractionLevels extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Displays alerts but not dialogs.
			 * @type {Adobe.Incopy.UserInteractionLevels}
			 * @readonly
			 */
			public static readonly INTERACT_WITH_ALERTS: Adobe.Incopy.UserInteractionLevels;
			/**
			 * The script displays all dialogs and alerts.
			 * @type {Adobe.Incopy.UserInteractionLevels}
			 * @readonly
			 */
			public static readonly INTERACT_WITH_ALL: Adobe.Incopy.UserInteractionLevels;
			/**
			 * Alias for INTERACT_WITH_ALERTS. Displays alerts but not 
			 * dialogs.
			 * @type {Adobe.Incopy.UserInteractionLevels}
			 * @readonly
			 */
			public static readonly interactWithAlerts: Adobe.Incopy.UserInteractionLevels;
			/**
			 * Alias for INTERACT_WITH_ALL. The script displays all dialogs 
			 * and alerts.
			 * @type {Adobe.Incopy.UserInteractionLevels}
			 * @readonly
			 */
			public static readonly interactWithAll: Adobe.Incopy.UserInteractionLevels;
			/**
			 * The script does not display any dialogs or alerts.
			 * @type {Adobe.Incopy.UserInteractionLevels}
			 * @readonly
			 */
			public static readonly NEVER_INTERACT: Adobe.Incopy.UserInteractionLevels;
			/**
			 * Alias for NEVER_INTERACT. The script does not display any 
			 * dialogs or alerts.
			 * @type {Adobe.Incopy.UserInteractionLevels}
			 * @readonly
			 */
			public static readonly neverInteract: Adobe.Incopy.UserInteractionLevels;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}