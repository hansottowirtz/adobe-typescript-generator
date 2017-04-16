/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class RubyTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Provides ruby for a group of characters.
			 * @type {Adobe.Incopy.RubyTypes}
			 * @readonly
			 */
			public static readonly GROUP_RUBY: Adobe.Incopy.RubyTypes;
			/**
			 * Alias for GROUP_RUBY. Provides ruby for a group of 
			 * characters.
			 * @type {Adobe.Incopy.RubyTypes}
			 * @readonly
			 */
			public static readonly groupRuby: Adobe.Incopy.RubyTypes;
			/**
			 * Provides ruby for each individual character in the group.
			 * @type {Adobe.Incopy.RubyTypes}
			 * @readonly
			 */
			public static readonly PER_CHARACTER_RUBY: Adobe.Incopy.RubyTypes;
			/**
			 * Alias for PER_CHARACTER_RUBY. Provides ruby for each 
			 * individual character in the group.
			 * @type {Adobe.Incopy.RubyTypes}
			 * @readonly
			 */
			public static readonly perCharacterRuby: Adobe.Incopy.RubyTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}