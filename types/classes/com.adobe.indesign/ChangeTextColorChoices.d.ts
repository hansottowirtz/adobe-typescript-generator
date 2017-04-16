/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ChangeTextColorChoices extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The text color for changed text is the same as the text 
			 * color defined in track changes preferences. For information, 
			 * see text color for added text, text color for deleted text, 
			 * or text color for moved text.
			 * @type {Adobe.Indesign.ChangeTextColorChoices}
			 * @readonly
			 */
			public static readonly CHANGE_USES_CHANGE_PREF_COLOR: Adobe.Indesign.ChangeTextColorChoices;
			/**
			 * The text color for changed text is the same as the galley 
			 * text color.
			 * @type {Adobe.Indesign.ChangeTextColorChoices}
			 * @readonly
			 */
			public static readonly CHANGE_USES_GALLEY_TEXT_COLOR: Adobe.Indesign.ChangeTextColorChoices;
			/**
			 * Alias for CHANGE_USES_CHANGE_PREF_COLOR. The text color for 
			 * changed text is the same as the text color defined in track 
			 * changes preferences. For information, see text color for 
			 * added text, text color for deleted text, or text color for 
			 * moved text.
			 * @type {Adobe.Indesign.ChangeTextColorChoices}
			 * @readonly
			 */
			public static readonly changeUsesChangePrefColor: Adobe.Indesign.ChangeTextColorChoices;
			/**
			 * Alias for CHANGE_USES_GALLEY_TEXT_COLOR. The text color for 
			 * changed text is the same as the galley text color.
			 * @type {Adobe.Indesign.ChangeTextColorChoices}
			 * @readonly
			 */
			public static readonly changeUsesGalleyTextColor: Adobe.Indesign.ChangeTextColorChoices;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}