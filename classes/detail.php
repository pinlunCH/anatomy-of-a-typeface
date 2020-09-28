<?php

Class Detail
{
    var $id = "";
    var $name = "";
    var $image = "";
    var $detail = "";
    

    public function __construct($id,$name,$image,$detail)
    {
        $this->id = $id;
        $this->name = $name;
        $this->image = $image;
        $this->detail = $detail;
    }
    public static function findById($id)
    {
        $arrDe = Db::fetch("SELECT * FROM details WHERE id ='".$id."'");
        $det = $arrDe[0];      
        return new Detail($det["id"],$det["strName"],$det["strImage"],$det["strDetail"]);

    }
}


?>