/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ToolTipOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for FAST. Displays tool tips more quickly than normal.
			 * @type {Adobe.Indesign.ToolTipOptions}
			 * @readonly
			 */
			public static readonly fast: Adobe.Indesign.ToolTipOptions;
			/**
			 * Displays tool tips more quickly than normal.
			 * @type {Adobe.Indesign.ToolTipOptions}
			 * @readonly
			 */
			public static readonly FAST: Adobe.Indesign.ToolTipOptions;
			/**
			 * Alias for NONE. Turns off tool tips.
			 * @type {Adobe.Indesign.ToolTipOptions}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.ToolTipOptions;
			/**
			 * Turns off tool tips.
			 * @type {Adobe.Indesign.ToolTipOptions}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.ToolTipOptions;
			/**
			 * Alias for NORMAL. Displays tool tips.
			 * @type {Adobe.Indesign.ToolTipOptions}
			 * @readonly
			 */
			public static readonly normal: Adobe.Indesign.ToolTipOptions;
			/**
			 * Displays tool tips.
			 * @type {Adobe.Indesign.ToolTipOptions}
			 * @readonly
			 */
			public static readonly NORMAL: Adobe.Indesign.ToolTipOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}