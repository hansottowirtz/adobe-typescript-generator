/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ChangeConditionsModes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Change adds to applied conditions.
			 * @type {Adobe.Incopy.ChangeConditionsModes}
			 * @readonly
			 */
			public static readonly ADD_TO: Adobe.Incopy.ChangeConditionsModes;
			/**
			 * Alias for ADD_TO. Change adds to applied conditions.
			 * @type {Adobe.Incopy.ChangeConditionsModes}
			 * @readonly
			 */
			public static readonly addTo: Adobe.Incopy.ChangeConditionsModes;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Change replaces applied conditions.
			 * @type {Adobe.Incopy.ChangeConditionsModes}
			 * @readonly
			 */
			public static readonly REPLACE_WITH: Adobe.Incopy.ChangeConditionsModes;
			/**
			 * Alias for REPLACE_WITH. Change replaces applied conditions.
			 * @type {Adobe.Incopy.ChangeConditionsModes}
			 * @readonly
			 */
			public static readonly replaceWith: Adobe.Incopy.ChangeConditionsModes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}