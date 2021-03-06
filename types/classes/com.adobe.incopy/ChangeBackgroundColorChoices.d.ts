/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ChangeBackgroundColorChoices extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The background color for changed text is the same as the 
			 * track changes preferences background color. For information, 
			 * see background color for added text, background color for 
			 * deleted text, or background color for moved text.
			 * @type {Adobe.Incopy.ChangeBackgroundColorChoices}
			 * @readonly
			 */
			public static readonly CHANGE_BACKGROUND_USES_CHANGE_PREF_COLOR: Adobe.Incopy.ChangeBackgroundColorChoices;
			/**
			 * The background color for changed text is the same as the 
			 * galley background color.
			 * @type {Adobe.Incopy.ChangeBackgroundColorChoices}
			 * @readonly
			 */
			public static readonly CHANGE_BACKGROUND_USES_GALLEY_BACKGROUND_COLOR: Adobe.Incopy.ChangeBackgroundColorChoices;
			/**
			 * The background color for changed text is the same as the 
			 * color assigned to the current user.
			 * @type {Adobe.Incopy.ChangeBackgroundColorChoices}
			 * @readonly
			 */
			public static readonly CHANGE_BACKGROUND_USES_USER_COLOR: Adobe.Incopy.ChangeBackgroundColorChoices;
			/**
			 * Alias for CHANGE_BACKGROUND_USES_CHANGE_PREF_COLOR. The 
			 * background color for changed text is the same as the track 
			 * changes preferences background color. For information, see 
			 * background color for added text, background color for 
			 * deleted text, or background color for moved text.
			 * @type {Adobe.Incopy.ChangeBackgroundColorChoices}
			 * @readonly
			 */
			public static readonly changeBackgroundUsesChangePrefColor: Adobe.Incopy.ChangeBackgroundColorChoices;
			/**
			 * Alias for CHANGE_BACKGROUND_USES_GALLEY_BACKGROUND_COLOR. 
			 * The background color for changed text is the same as the 
			 * galley background color.
			 * @type {Adobe.Incopy.ChangeBackgroundColorChoices}
			 * @readonly
			 */
			public static readonly changeBackgroundUsesGalleyBackgroundColor: Adobe.Incopy.ChangeBackgroundColorChoices;
			/**
			 * Alias for CHANGE_BACKGROUND_USES_USER_COLOR. The background 
			 * color for changed text is the same as the color assigned to 
			 * the current user.
			 * @type {Adobe.Incopy.ChangeBackgroundColorChoices}
			 * @readonly
			 */
			public static readonly changeBackgroundUsesUserColor: Adobe.Incopy.ChangeBackgroundColorChoices;
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