/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ChangeConditionsModes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Change adds to applied conditions.
			 * @type {Adobe.Indesign.ChangeConditionsModes}
			 * @readonly
			 */
			public static readonly ADD_TO: Adobe.Indesign.ChangeConditionsModes;
			/**
			 * Alias for ADD_TO. Change adds to applied conditions.
			 * @type {Adobe.Indesign.ChangeConditionsModes}
			 * @readonly
			 */
			public static readonly addTo: Adobe.Indesign.ChangeConditionsModes;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Change replaces applied conditions.
			 * @type {Adobe.Indesign.ChangeConditionsModes}
			 * @readonly
			 */
			public static readonly REPLACE_WITH: Adobe.Indesign.ChangeConditionsModes;
			/**
			 * Alias for REPLACE_WITH. Change replaces applied conditions.
			 * @type {Adobe.Indesign.ChangeConditionsModes}
			 * @readonly
			 */
			public static readonly replaceWith: Adobe.Indesign.ChangeConditionsModes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}