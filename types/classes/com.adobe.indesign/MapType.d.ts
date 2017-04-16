/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MapType extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** group to group mapping rule. */
			public static readonly GROUP_MAPPING_RULE: Adobe.Indesign.MapType;
			/** group to style mapping rule. */
			public static readonly GROUP_TO_STYLE_MAPPING_RULE: Adobe.Indesign.MapType;
			/** Alias for GROUP_MAPPING_RULE. group to group mapping rule. */
			public static readonly groupMappingRule: Adobe.Indesign.MapType;
			/**
			 * Alias for GROUP_TO_STYLE_MAPPING_RULE. group to style 
			 * mapping rule.
			 */
			public static readonly groupToStyleMappingRule: Adobe.Indesign.MapType;
			/** style to style mapping rule. */
			public static readonly STYLE_MAPPING_RULE: Adobe.Indesign.MapType;
			/** style to group mapping rule. */
			public static readonly STYLE_TO_GROUP_MAPPING_RULE: Adobe.Indesign.MapType;
			/** Alias for STYLE_MAPPING_RULE. style to style mapping rule. */
			public static readonly styleMappingRule: Adobe.Indesign.MapType;
			/**
			 * Alias for STYLE_TO_GROUP_MAPPING_RULE. style to group 
			 * mapping rule.
			 */
			public static readonly styleToGroupMappingRule: Adobe.Indesign.MapType;
			/** Constructor */
			public constructor();
		}
	}
}