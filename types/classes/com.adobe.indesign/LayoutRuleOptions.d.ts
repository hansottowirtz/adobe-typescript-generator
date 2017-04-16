/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class LayoutRuleOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Use guide slicing to resize objects on the page as it 
			 * resizes.
			 * @type {Adobe.Indesign.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly GUIDE_BASED: Adobe.Indesign.LayoutRuleOptions;
			/**
			 * Alias for GUIDE_BASED. Use guide slicing to resize objects 
			 * on the page as it resizes.
			 * @type {Adobe.Indesign.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly guideBased: Adobe.Indesign.LayoutRuleOptions;
			/**
			 * Reposition and resize objects on the page as it resizes.
			 * @type {Adobe.Indesign.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly OBJECT_BASED: Adobe.Indesign.LayoutRuleOptions;
			/**
			 * Alias for OBJECT_BASED. Reposition and resize objects on the 
			 * page as it resizes.
			 * @type {Adobe.Indesign.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly objectBased: Adobe.Indesign.LayoutRuleOptions;
			/**
			 * Alias for OFF. No layout rule on the page as it resizes.
			 * @type {Adobe.Indesign.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly off: Adobe.Indesign.LayoutRuleOptions;
			/**
			 * No layout rule on the page as it resizes.
			 * @type {Adobe.Indesign.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly OFF: Adobe.Indesign.LayoutRuleOptions;
			/**
			 * Use existing layout rule setting on the page. Used for 
			 * creating alternate layouts.
			 * @type {Adobe.Indesign.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly PRESERVE_EXISTING: Adobe.Indesign.LayoutRuleOptions;
			/**
			 * Alias for PRESERVE_EXISTING. Use existing layout rule 
			 * setting on the page. Used for creating alternate layouts.
			 * @type {Adobe.Indesign.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly preserveExisting: Adobe.Indesign.LayoutRuleOptions;
			/**
			 * Alias for RECENTER. Recenter objects on the page as it 
			 * resizes.
			 * @type {Adobe.Indesign.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly recenter: Adobe.Indesign.LayoutRuleOptions;
			/**
			 * Recenter objects on the page as it resizes.
			 * @type {Adobe.Indesign.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly RECENTER: Adobe.Indesign.LayoutRuleOptions;
			/**
			 * Alias for SCALE. Scale objects on the page as it resizes.
			 * @type {Adobe.Indesign.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly scale: Adobe.Indesign.LayoutRuleOptions;
			/**
			 * Scale objects on the page as it resizes.
			 * @type {Adobe.Indesign.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly SCALE: Adobe.Indesign.LayoutRuleOptions;
			/**
			 * Use layout rule from the page's applied master page.
			 * @type {Adobe.Indesign.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly USE_MASTER: Adobe.Indesign.LayoutRuleOptions;
			/**
			 * Alias for USE_MASTER. Use layout rule from the page's 
			 * applied master page.
			 * @type {Adobe.Indesign.LayoutRuleOptions}
			 * @readonly
			 */
			public static readonly useMaster: Adobe.Indesign.LayoutRuleOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}