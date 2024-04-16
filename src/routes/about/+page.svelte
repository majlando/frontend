<script>
	import About2 from "../../lib/components/about2.svelte";
    import About1 from "../../lib/components/about1.svelte"
</script>

<div class="container-fluid mt-2">
    <div class="row">
      <div class="col-md-7">
        <About1 />
      </div>
      <div class="col-md-5">
        <About2 />
      </div>
    </div>
</div>

<style>
  .row {
    margin-left: 2%;
    margin-right: 2%;
  }
</style>