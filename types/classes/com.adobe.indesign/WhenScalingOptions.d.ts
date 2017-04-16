/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class WhenScalingOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Adjust the scaling percentage of the item's transform
			 * @type {Adobe.Indesign.WhenScalingOptions}
			 * @readonly
			 */
			public static readonly ADJUST_SCALING_PERCENTAGE: Adobe.Indesign.WhenScalingOptions;
			/**
			 * Alias for ADJUST_SCALING_PERCENTAGE. Adjust the scaling 
			 * percentage of the item's transform
			 * @type {Adobe.Indesign.WhenScalingOptions}
			 * @readonly
			 */
			public static readonly adjustScalingPercentage: Adobe.Indesign.WhenScalingOptions;
			/**
			 * Apply scaling to the item's content
			 * @type {Adobe.Indesign.WhenScalingOptions}
			 * @readonly
			 */
			public static readonly APPLY_TO_CONTENT: Adobe.Indesign.WhenScalingOptions;
			/**
			 * Alias for APPLY_TO_CONTENT. Apply scaling to the item's 
			 * content
			 * @type {Adobe.Indesign.WhenScalingOptions}
			 * @readonly
			 */
			public static readonly applyToContent: Adobe.Indesign.WhenScalingOptions;
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