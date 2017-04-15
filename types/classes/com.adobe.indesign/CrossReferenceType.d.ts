/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CrossReferenceType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Inserts the specified string in front of the referenced 
			 * topic.
			 */
			public static readonly CUSTOM_CROSS_REFERENCE: Adobe.Indesign.CrossReferenceType;
			/**
			 * Inserts the specified following topic separator and the 
			 * specified string after the referenced topic. If no following 
			 * topic separator is specified, inserts a space.
			 */
			public static readonly CUSTOM_CROSS_REFERENCE_AFTER: Adobe.Indesign.CrossReferenceType;
			/**
			 * Inserts the specified string and the specified before cross 
			 * reference separator in front of the referenced topic. If no 
			 * before cross reference separator is specified, inserts a 
			 * space.
			 */
			public static readonly CUSTOM_CROSS_REFERENCE_BEFORE: Adobe.Indesign.CrossReferenceType;
			/**
			 * Alias for CUSTOM_CROSS_REFERENCE. Inserts the specified 
			 * string in front of the referenced topic.
			 */
			public static readonly customCrossReference: Adobe.Indesign.CrossReferenceType;
			/**
			 * Alias for CUSTOM_CROSS_REFERENCE_AFTER. Inserts the 
			 * specified following topic separator and the specified string 
			 * after the referenced topic. If no following topic separator 
			 * is specified, inserts a space.
			 */
			public static readonly customCrossReferenceAfter: Adobe.Indesign.CrossReferenceType;
			/**
			 * Alias for CUSTOM_CROSS_REFERENCE_BEFORE. Inserts the 
			 * specified string and the specified before cross reference 
			 * separator in front of the referenced topic. If no before 
			 * cross reference separator is specified, inserts a space.
			 */
			public static readonly customCrossReferenceBefore: Adobe.Indesign.CrossReferenceType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for SEE. Inserts 'See' in front of the referenced 
			 * topic.
			 */
			public static readonly see: Adobe.Indesign.CrossReferenceType;
			/** Inserts 'See' in front of the referenced topic. */
			public static readonly SEE: Adobe.Indesign.CrossReferenceType;
			/** Inserts 'See also' in front of the referenced topic. */
			public static readonly SEE_ALSO: Adobe.Indesign.CrossReferenceType;
			/** Inserts 'See also herein' in front of the referenced topic. */
			public static readonly SEE_ALSO_HEREIN: Adobe.Indesign.CrossReferenceType;
			/** Inserts 'See herein' in front of the referenced topic. */
			public static readonly SEE_HEREIN: Adobe.Indesign.CrossReferenceType;
			/**
			 * Inserts 'See also' in front of the referenced topic if the 
			 * topic has an associated page reference; inserts 'See' if the 
			 * topic does not have a page reference.
			 */
			public static readonly SEE_OR_ALSO_BRACKET: Adobe.Indesign.CrossReferenceType;
			/**
			 * Alias for SEE_ALSO. Inserts 'See also' in front of the 
			 * referenced topic.
			 */
			public static readonly seeAlso: Adobe.Indesign.CrossReferenceType;
			/**
			 * Alias for SEE_ALSO_HEREIN. Inserts 'See also herein' in 
			 * front of the referenced topic.
			 */
			public static readonly seeAlsoHerein: Adobe.Indesign.CrossReferenceType;
			/**
			 * Alias for SEE_HEREIN. Inserts 'See herein' in front of the 
			 * referenced topic.
			 */
			public static readonly seeHerein: Adobe.Indesign.CrossReferenceType;
			/**
			 * Alias for SEE_OR_ALSO_BRACKET. Inserts 'See also' in front 
			 * of the referenced topic if the topic has an associated page 
			 * reference; inserts 'See' if the topic does not have a page 
			 * reference.
			 */
			public static readonly seeOrAlsoBracket: Adobe.Indesign.CrossReferenceType;
			/** Constructor */
			public constructor();
		}
	}
}