<?php

namespace App\Http\Controllers;

use App\Models\Button;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;

class ButtonController
{
    /**
     * Display a listing of the resource.
     */
    public function create()
    {
        $button = new Button();
        $button->save();
        $response = ["id" => $button->id, "count" => $button->count ?? 0];
        return \Illuminate\Support\Facades\Response::json($response);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function add(int $id)
    {
        $button = new Button();
        $button = $button->newQuery()->find($id);
        if(!$button) {
            $response = ["delete" => false, "menssage" => "Not Found"];
            return \Illuminate\Support\Facades\Response::json($response);
        }
        $button->count++;
        $button->save();
        $response = ["id" => $button->id, "count" => $button->count ?? 0];
        return \Illuminate\Support\Facades\Response::json($response);
    }

    public function get(int $id)
    {
        $button = new Button();
        $button = $button->newQuery()->find($id);
        if(!$button) {
            $response = ["delete" => false, "menssage" => "Not Found"];
            return \Illuminate\Support\Facades\Response::json($response);
        }
        $response = ["id" => $button->id, "count" => $button->count ?? 0];
        return \Illuminate\Support\Facades\Response::json($response);
    }

    public function getAll()
    {
        $buttons = Button::all()->sortBy("id");
        foreach ($buttons as $button) {
            $response[] = ["id" => $button->id, "count" => $button->count ?? 0];
        }
        return \Illuminate\Support\Facades\Response::json($response);
    }

    /**
     * Update the specified resource in storage.
     */
    public function delete(int $id)
    {
        $button = new Button();
        $button = $button->newQuery()->find($id);
        if(!$button) {
            $response = ["delete" => false, "menssage" => "Not Found"];
            return \Illuminate\Support\Facades\Response::json($response);
        }
        $result = $button->delete();
        $message = "correctly Deleted";
        if(!$result) {
            $message = "BDD Error";
        }
        $response = ["delete" => boolval($result), "menssage" => $message];
        return \Illuminate\Support\Facades\Response::json($response);
    }

}
