/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TagType extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Tag as artifact */
			public static readonly TAG_ARTIFACT: Adobe.Indesign.TagType;
			/** Tag as Story or Figure based on object type */
			public static readonly TAG_BASED_ON_OBJECT: Adobe.Indesign.TagType;
			/**
			 * Determine the tag from XML structure, or fallback to 
			 * standard tag
			 */
			public static readonly TAG_FROM_STRUCTURE: Adobe.Indesign.TagType;
			/** Alias for TAG_ARTIFACT. Tag as artifact */
			public static readonly tagArtifact: Adobe.Indesign.TagType;
			/**
			 * Alias for TAG_BASED_ON_OBJECT. Tag as Story or Figure based 
			 * on object type
			 */
			public static readonly tagBasedOnObject: Adobe.Indesign.TagType;
			/**
			 * Alias for TAG_FROM_STRUCTURE. Determine the tag from XML 
			 * structure, or fallback to standard tag
			 */
			public static readonly tagFromStructure: Adobe.Indesign.TagType;
			/** Constructor */
			public constructor();
		}
	}
}