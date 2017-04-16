/// <reference path="../../packages/com.adobe.flashpro/index.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * The FolderItem object is a sub class of the Item Object. It 
		 * inherits all the Item properties. It currently does not have 
		 * any of its own unique properties. It was designed this way 
		 * so that one can set the name, etc. Additionally it enables 
		 * us to scale it in future releases.
		 */
		class FolderItem extends Adobe.Flashpro.LibraryItem {
			
		}
	}
}