/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PanelLayoutResize extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Do not resize master pages panel area when resizing panel.
			 * @type {Adobe.Indesign.PanelLayoutResize}
			 * @readonly
			 */
			public static readonly MASTERS_FIXED: Adobe.Indesign.PanelLayoutResize;
			/**
			 * Alias for MASTERS_FIXED. Do not resize master pages panel 
			 * area when resizing panel.
			 * @type {Adobe.Indesign.PanelLayoutResize}
			 * @readonly
			 */
			public static readonly mastersFixed: Adobe.Indesign.PanelLayoutResize;
			/**
			 * Do not resize document pages panel area when resizing panel.
			 * @type {Adobe.Indesign.PanelLayoutResize}
			 * @readonly
			 */
			public static readonly PAGES_FIXED: Adobe.Indesign.PanelLayoutResize;
			/**
			 * Alias for PAGES_FIXED. Do not resize document pages panel 
			 * area when resizing panel.
			 * @type {Adobe.Indesign.PanelLayoutResize}
			 * @readonly
			 */
			public static readonly pagesFixed: Adobe.Indesign.PanelLayoutResize;
			/**
			 * Resize panel areas proportionally.
			 * @type {Adobe.Indesign.PanelLayoutResize}
			 * @readonly
			 */
			public static readonly PROPORTIONAL_RESIZE: Adobe.Indesign.PanelLayoutResize;
			/**
			 * Alias for PROPORTIONAL_RESIZE. Resize panel areas 
			 * proportionally.
			 * @type {Adobe.Indesign.PanelLayoutResize}
			 * @readonly
			 */
			public static readonly proportionalResize: Adobe.Indesign.PanelLayoutResize;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}